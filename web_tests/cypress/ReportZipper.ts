import * as fs from 'fs';
import * as archiver from 'archiver';
import * as path from 'path';

class ReportZipper {
    private static _zipReport(sourceDirectories: {path: string, nameInZip?: string}[], outputDirectory: string, outputFileName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(outputDirectory)) {
                fs.mkdirSync(outputDirectory, { recursive: true });
            }

            const output = fs.createWriteStream(path.join(outputDirectory, outputFileName));
            const archive = archiver('zip', {
                zlib: { level: 9 }
            });
        
            output.on('close', function() {
                console.log(archive.pointer() + ' total bytes');
                console.log('archiver has been finalized and the output file descriptor has closed.');
                resolve();
            });
        
            archive.on('warning', function(err) {
                if (err.code === 'ENOENT') {
                    console.warn(err);
                } else {
                    reject(err);
                }
            });
        
            archive.on('error', function(err) {
                reject(err);
            });
        
            archive.pipe(output);
        
            sourceDirectories.forEach(({path: sourceDirectory, nameInZip}) => {
                if (!fs.readdirSync(sourceDirectory).length) {
                    fs.writeFileSync(path.join(sourceDirectory, '.empty'), '');
                }
                archive.directory(sourceDirectory, nameInZip);
            });
        
            archive.finalize();
        });
    }

    public static async zipReport(testReportNamePrefix: string = "e2e_run"){
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        let reportFileName: string = `${testReportNamePrefix}-${timestamp}.html`;
        const oldPath = path.join(__dirname, 'reports', 'html', 'index.html');
        const newPath = path.join(__dirname, 'reports', 'html', reportFileName);

        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          console.log(`Report file renamed to ${reportFileName}`);
        });

        const reportsDirectory = path.join(__dirname, 'reports', 'html');
        const screenshotsDirectory = path.join(__dirname, 'screenshots');
        
        const outputDirectory = path.join(__dirname, 'artifacts', 'runs');
        const outputFileName = `${testReportNamePrefix}-${timestamp}.zip`;
        await ReportZipper._zipReport([{path: reportsDirectory, nameInZip: ""}, {path: screenshotsDirectory, nameInZip: 'screenshots'}], outputDirectory, outputFileName);
    }
}

export = ReportZipper;
