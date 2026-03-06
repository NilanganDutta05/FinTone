from fastapi import APIRouter
from app.models.investment_model import SchemeInput
from app.services.cashflow_generator import generate_cashflows
from app.services.finance_engine import analyze_investment


router = APIRouter()


@router.post("/analyze-scheme")
def analyze_scheme(data: SchemeInput):

    cashflows = generate_cashflows(
        data.premium_per_year,
        data.premium_years,
        data.payout_every,
        data.payout_amount,
        data.maturity_amount,
        data.total_years
    )

    result = analyze_investment(cashflows)

    return {
        "cashflows": cashflows,
        "analysis": result
    }