from pydantic import BaseModel


class SchemeInput(BaseModel):

    premium_per_year: float
    premium_years: int
    payout_every: int
    payout_amount: float
    maturity_amount: float
    total_years: int