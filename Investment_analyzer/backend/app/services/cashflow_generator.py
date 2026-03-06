def generate_cashflows(
    premium_per_year,
    premium_years,
    payout_every,
    payout_amount,
    maturity_amount,
    total_years
):

    cashflows = []

    # Premium payments (years 0 to premium_years - 1)
    for i in range(premium_years):
        cashflows.append(-premium_per_year)

    # Remaining years up to total_years
    for year in range(premium_years, total_years + 1):
        if payout_every > 0 and (year - premium_years) % payout_every == 0:
            cashflows.append(payout_amount)
        else:
            cashflows.append(0)

    # Final maturity
    cashflows[-1] += maturity_amount

    return cashflows