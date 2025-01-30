import pandas as pd
import sys

def wide_to_long(input_file):
    """
    Converts a wide-format CSV file to a long format.

    Args:
        input_file: The name of the input CSV file.

    Returns:
        None
    """

    df = pd.read_csv(input_file)

    # Drop the first two rows
    df = df.iloc[2:]

    # Set the third row as the header
    df.columns = df.iloc[0]
    df = df.iloc[1:]

    # Identify ID and value variables
    id_vars = ['ResponseID']
    value_vars = df.columns[4:]

    # Reshape the data
    df_long = pd.melt(df, id_vars=id_vars, value_vars=value_vars, var_name='Question', value_name='Response')

    # Write the output to a new CSV file
    output_file = input_file.replace('.csv', '_long.csv')
    df_long.to_csv(output_file, index=False)

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python wide_to_long.py <input_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    wide_to_long(input_file)
