# To Run:
# python merge_csv.py path/to/file1.csv path/to/file2.csv path/to/merged.csv



import pandas as pd
import argparse

def merge_csv_files(file1, file2, output_file):
    # Read both CSV files
    df1 = pd.read_csv(file1)
    df2 = pd.read_csv(file2)
    
    # Merge the DataFrames on the 'Word' column
    merged_df = pd.merge(df1, df2, on='Word', how='inner')  # 'inner' for intersection only
    
    # Save the merged DataFrame to a new CSV file
    merged_df.to_csv(output_file, index=False)
    print(f"Merged file saved as '{output_file}'")

if __name__ == "__main__":
    # Set up argument parsing
    parser = argparse.ArgumentParser(description='Merge two CSV files based on the shared column "Word".')
    parser.add_argument('file1', help='Path to the first CSV file')
    parser.add_argument('file2', help='Path to the second CSV file')
    parser.add_argument('output_file', help='Path for the output merged CSV file')
    
    # Parse the arguments
    args = parser.parse_args()
    
    # Call the merge function with provided arguments
    merge_csv_files(args.file1, args.file2, args.output_file)
