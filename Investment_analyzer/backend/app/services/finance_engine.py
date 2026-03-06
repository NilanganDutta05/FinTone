import numpy_financial as npf
from pyxirr import xirr
from datetime import datetime, timedelta


def analyze_investment(cashflows):

    # starting date for XIRR calculation
    start_date = datetime(2026, 1, 1)

    # total invested (negative cashflows)
    total_invested = sum(abs(c) for c in cashflows if c < 0)

    # total returns (positive cashflows)
    total_return = sum(c for c in cashflows if c > 0)

    profit = total_return - total_invested

    # IRR calculation
    irr = npf.irr(cashflows)

    # generate yearly dates for XIRR
    import math
    dates = [start_date.replace(year=start_date.year + i) for i in range(len(cashflows))]

    # calculate XIRR
    try:
        xirr_value = xirr(dict(zip(dates, cashflows)))
    except Exception:
        xirr_value = None

    irr_str = "N/A"
    if irr is not None and not math.isnan(irr):
        irr_str = f"{irr * 100:.2f}%"
        
    xirr_str = "N/A"
    if xirr_value is not None:
        xirr_str = f"{xirr_value * 100:.2f}%"

    # calculate CAGR
    cagr_str = "N/A"
    if total_invested > 0:
        total_years = len(cashflows) - 1 # from T=0 to T=N
        if total_years > 0:
            cagr = (total_return / total_invested) ** (1 / total_years) - 1
            cagr_str = f"{cagr * 100:.2f}%"

    return {
        "total_invested": total_invested,
        "total_return": total_return,
        "profit": profit,
        "irr": irr_str,
        "cagr": cagr_str,
        "xirr": xirr_str
    }