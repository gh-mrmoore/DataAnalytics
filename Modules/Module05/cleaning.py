import pandas as pd
import numpy as np

def main(dataFrame):
    # print("Hello World!")
    print("===============DataFrame Head===============")
    print(dataFrame.head())
    print("===============DataFrame Tail===============")
    print(dataFrame.tail())
    print("===============Info===============")
    print(dataFrame.info())
    print("===============Data Types===============")
    print(dataFrame.dtypes)
    print("===============Shape===============")
    print(dataFrame.shape)
    print("===============Describe===============")
    print(dataFrame.describe())
    

if __name__ == "__main__":
    main()