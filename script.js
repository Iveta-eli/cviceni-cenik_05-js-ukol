function selectPlan(planNumber) {
   
    const allPlans = document.querySelectorAll('.plan');
    allPlans.forEach((plan) => {
      plan.classList.remove('plan--selected');
    });
  

    const selectedPlan = document.getElementById(`plan${planNumber}`);
    if (selectedPlan) {
      selectedPlan.classList.add('plan--selected');
    }
  }

 