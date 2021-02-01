import { renderHook, act } from "@testing-library/react-hooks";
import useModal from "./useModal";

describe("useModal util", () => {
  it("Should toggle open correctly", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.toggle()
    })

  expect(result.current.open).toEqual(true)
  });
});
