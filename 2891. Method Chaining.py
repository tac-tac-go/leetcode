import pandas as pd

def findHeavyAnimals(df: pd.DataFrame) -> pd.DataFrame:
    df = df.sort_values(by='weight', ascending=False)
    df = df[df['weight']>=100]
    return df['name'].to_frame() 
