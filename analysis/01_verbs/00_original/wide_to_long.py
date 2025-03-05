import pandas as pd
import io
import re
import argparse  # Import the argparse module

def wide_to_long_verbs(df):
    """
    Converts a wide-format dataframe of verb evaluation data to a long format.

    Args:
        df (pd.DataFrame): Input dataframe in wide format.

    Returns:
        pd.DataFrame: Dataframe in long format with columns:
            - ResponseID: Participant identifier
            - Task: "Valence" or "Phys/Psych" depending on the verb evaluation task.
            - Word: The verb being evaluated (lowercase).
            - Response: Participant's response to the verb.
            - ReactionTime: Participant's reaction time for the verb.
    """

    data = []

    for index, row in df.iterrows():
        try:
            response_id = row['ResponseID']
        except KeyError:
            print("Warning: 'ResponseID' column not found in this row. Skipping.")
            continue

        # --- Valence Task ---
        # More robust regex for valence columns
        valence_cols = [col for col in df.columns if "to /" in col.lower() and ("positive" in col.lower() or "negative" in col.lower())]
        print(f"Valence columns: {valence_cols}")  # Debugging print

        for col in valence_cols:
            # Extract word from column name (case-insensitive)
            word_match = re.search(r"to\s*/\s*([a-z]+)", col, re.IGNORECASE)
            if word_match:
                word = word_match.group(1).lower()  # Convert word to lowercase
            else:
                word = "UnknownWord"  # Handle cases where word extraction fails

            # Find corresponding timing column. Crucially, use next() with a default.
            timing_col = next((c for c in df.columns if "timing-page submit" in c.lower() and df.columns.get_loc(c) > df.columns.get_loc(col)), None)

            if timing_col:
                data.append({
                    'ResponseID': response_id,
                    'Task': 'Valence',
                    'Word': word,
                    'Response': row[col],
                    'ReactionTime': row[timing_col]
                })
            else:
                print(f"Warning: No timing column found for valence word '{word}'.")

        # --- Phys/Psych Task ---
        # More robust regex for phys/psych columns
        phys_psych_cols = [col for col in df.columns if "to /" in col.lower() and ("physical" in col.lower() or "psychological" in col.lower())]
        print(f"Phys/Psych columns: {phys_psych_cols}")  # Debugging print

        for col in phys_psych_cols:
            # Extract word from column name (case-insensitive)
            word_match = re.search(r"to\s*/\s*([a-z]+)", col, re.IGNORECASE)
            if word_match:
                word = word_match.group(1).lower()  # Convert word to lowercase
            else:
                word = "UnknownWord"  # Handle cases where word extraction fails

            # Find corresponding timing column. Crucially, use next() with a default.
            timing_col = next((c for c in df.columns if "timing-page submit" in c.lower() and df.columns.get_loc(c) > df.columns.get_loc(col)), None)

            if timing_col:
                data.append({
                    'ResponseID': response_id,
                    'Task': 'Phys/Psych',
                    'Word': word,
                    'Response': row[col],
                    'ReactionTime': row[timing_col]
                })
            else:
                print(f"Warning: No timing column found for phys/psych word '{word}'.")

    return pd.DataFrame(data)


if __name__ == "__main__":
