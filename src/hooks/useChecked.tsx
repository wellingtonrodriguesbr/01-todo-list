import { useState } from "react";

export function useChecked() {
  const [checkedState, setCheckedState] = useState(false);

  return { checkedState, setCheckedState };
}
