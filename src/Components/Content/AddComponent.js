import React from "react";

function AddComponent() {
  return (
    <div>
      <div className="w-full h-20 add-component-head" />
      <div
        className="flex flex-col items-center"
        style={{
          transform: "translate(0, -40px)",
        }}
      >
        <div
          className=""
          style={{
            background: "var(--melrose)",
            width: "80px",
            height: "80px",
            borderRadius: "999px",
            border: "5px solid white",
          }}
        >
          <img
            src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="text-black font-bold mt-3">
          Y Combinator Startup School Certification
        </div>
        <div className="mt-2">Simply generate your first Certification</div>
        <div className="mt-1">Just click on the button</div>
        <div
          className="flex items-center p-3 mt-3"
          style={{
            background: "#2f49d1",
            borderRadius: "15px",
            padding: "8px 16px",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div className="ml-2">Claim Certificate</div>
          <div
            className="ml-2"
            style={{
              background: "var(--edanub)",
              borderRadius: "15px",
              padding: "4px 8px 4px 8px",
              color: "white",
            }}
          >
            <i class="fas fa-certificate"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddComponent;
