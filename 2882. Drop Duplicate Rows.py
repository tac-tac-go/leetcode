import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    result_df = customers.drop_duplicates(subset=['email'])
    return result_df
    
