function selectPlan(planNumber) {
    // Odstraníme třídu plan--selected ze všech prvků
    const allPlans = document.querySelectorAll('.plan');
    allPlans.forEach((plan) => {
      plan.classList.remove('plan--selected');
    });
  
    // Vybereme plán na základě čísla
    const selectedPlan = document.getElementById(`plan${planNumber}`);
    if (selectedPlan) {
      selectedPlan.classList.add('plan--selected');
    }
  }

 