Attribute VB_Name = "All_Stock_Analysis"
Sub AllStockAnalysis()
    Dim startTime As Single
    Dim endTime As Single
    startTime = Timer
    ' Prepare the array/list of tickers
    Dim tickers(12) As String
    tickers(0) = "AY"
    tickers(1) = "CSIQ"
    tickers(2) = "DQ"
    tickers(3) = "ENPH"
    tickers(4) = "FSLR"
    tickers(5) = "HASI"
    tickers(6) = "JKS"
    tickers(7) = "RUN"
    tickers(8) = "SEDG"
    tickers(9) = "SPWR"
    tickers(10) = "TERP"
    tickers(11) = "VSLR"
    
    ' Prepare the results sheet for output
    Worksheets("all_stocks_analysis").Activate
    Range("A1").Value = "All Stocks(2018)"
    Range("A3").Value = "Ticker"
    Range("B3").Value = "Total Daily Volume"
    Range("C3").Value = "Return"
    
    ' Prepare variables for use in analysis
    Dim rowStart As Integer
    Dim rowCount As Integer
    rowStart = 2
    
    Dim startingPrice As Single
    Dim endingPrice As Single
    
    ' Loop thru each ticker and output to the correct cell
    For i = 0 To 11
        ' Activate the data sheet at the start of each ticker's turn
        Worksheets("2018").Activate
        
        'rowCount code taken from https://stackoverflow.com/questions/18088729/row-count-where-data-exists
        rowCount = Cells(Rows.Count, "A").End(xlUp).Row
        
        totalVolume = 0
        
        ticker = tickers(i)
        
        For j = rowStart To rowCount
            If Cells(j, 1) = ticker Then
                totalVolume = totalVolume + Cells(j, 8).Value
            End If
            
            If Cells(j - 1, 1).Value <> ticker And Cells(j, 1).Value = ticker Then
                startingPrice = Cells(j, 6).Value
            End If
            
            If Cells(j + 1, 1).Value <> ticker And Cells(j, 1).Value = ticker Then
                endingPrice = Cells(j, 6).Value
            End If
            
        Next j
        ' Output results to the summary sheet
        Worksheets("all_stocks_analysis").Activate
        
        Cells(i + 4, 1).Value = ticker
        Cells(i + 4, 2).Value = totalVolume
        Cells(i + 4, 3).Value = (endingPrice / startingPrice) - 1
    Next i
    
    endTime = Timer
    MsgBox ("This code ran in " & (endTime - startTime) & " seconds.")
    
End Sub
