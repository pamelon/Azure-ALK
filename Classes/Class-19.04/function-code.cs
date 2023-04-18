#r "Microsoft.WindowsAzure.Storage"

using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.Storage;

public static void Run(
    Stream myBlob, 
    string name, 
    ILogger log, 
    [Blob("second-container/{name}", FileAccess.Write)] Stream outputBlob)
{
    log.LogInformation($"C# Blob trigger function processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");

    // Process data in the file
    StreamReader reader = new StreamReader(myBlob);
    string data = reader.ReadToEnd();
    string processedData = ProcessData(data);

    // Save processed data to the second container
    outputBlob.Write(Encoding.UTF8.GetBytes(processedData), 0, processedData.Length);
    outputBlob.Close();
}

private static string ProcessData(string data)
{
    // Process the data as per the requirement
    string processedData = data.ToUpper();
    return processedData;
}