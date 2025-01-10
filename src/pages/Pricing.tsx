export default function Pricing() {
  const plans = [
    {
      id: 0,
      plan_name: "Plan 1",
      plan_benefits: [
        {
          img: "example.png",
          benefit: "Beneficio 1",
        },
        {
          img: "example.png",
          benefit: "Beneficio 1",
        },
        {
          img: "example.png",
          benefit: "Beneficio 1",
        },
      ],
    },
    {
      id: 1,
      plan_name: "Plan 2",
      plan_benefits: [
        {
          img: "example.png",
          benefit: "Beneficio 2",
        },
        {
          img: "example.png",
          benefit: "Beneficio 2",
        },
        {
          img: "example.png",
          benefit: "Beneficio 2",
        },
      ],
    },
    {
      id: 2,
      plan_name: "Plan 3",
      plan_benefits: [
        {
          img: "example.png",
          benefit: "Beneficio 3",
        },
        {
          img: "example.png",
          benefit: "Beneficio 3",
        },
        {
          img: "example.png",
          benefit: "Beneficio 3",
        },
      ],
    },
  ];

  function planSelected(el: Object) {
    console.log(el);
  }

  return (
    <>
      <div className="header-section">
        <h1>Planes</h1>
      </div>
      <div className="plans-section">
        {plans.map((element) => (
          <div className="plan-card">
            <div className="plan-title">
              <h3>{element.plan_name}</h3>
            </div>
            <div className="plan-benefits">
              <img src="" alt="" />
              <div>
                <span>
                  {element.plan_benefits.map((benefit) => benefit.benefit)}
                </span>
              </div>
            </div>
            <div className="plan-actions">
              <button onClick={() => planSelected(element)}>Seleccionar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="more-information-pricing"></div>
      <div className="other-options"></div>
    </>
  );
}
