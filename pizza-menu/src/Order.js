import React from "react";

export function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        We're Serving Now !!. You can order until {closeHour - 1}
        :30p.m.
      </p>
    </div>
  );
}
