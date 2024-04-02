import { downloadFile } from './download';
import { extract } from './extract';
import { initializeDatabase } from './database';
import { processCSV } from './manage';

export async function processDataDump() {
const downloadPath: string = './tmp/dump.tar.gz';
await downloadFile('https://fiber-challenges.s3.amazonaws.com/dump.tar.gz', downloadPath);

const extractionPath = './tmp/extracted';
await extract(downloadPath, extractionPath);
await initializeDatabase();

const customerCSVPath = "tmp\\extracted\\dump\\customers.csv";
const organizationCSVPath = "tmp\\extracted\\dump\\organizations.csv";
 // Process customer CSV
 await processCSV(customerCSVPath, "customers");
 // Process organization CSV
 await processCSV(organizationCSVPath, "organizations");
  /**
   * Put your code here!
   */
}