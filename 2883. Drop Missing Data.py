import pandas as pd

def dropMissingData(df: pd.DataFrame) -> pd.DataFrame:
    return df[~df['name'].isna()]
