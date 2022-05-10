import React from "react";
import {create} from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("ProfileStatus component", () => {
    it("status from props should be in the status", () => {
      const component = create(<ProfileStatus status="fuck my life" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("fuck my life");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="fuck my life" />);
        const root = component.root;
        const span = root.findByType("span")
        expect(span).not.toBeNull();
      });

      test("after creation <input> should't be displayed", () => {
        const component = create(<ProfileStatus status="fuck my life" />);
        const root = component.root;
        expect(()=>{
          const input = root.findByType("input");
        }).toThrow();
      });

      test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="fuck my life" />);
        const root = component.root;
        const span = root.findByType("span")
        expect(span.children[0]).toBe("fuck my life");
      });

      // test("input should be displayed in editMode instad of span", () => {
      //   const component = create(<ProfileStatus status="fuck my life" />);
      //   const root = component.root;
      //   let span = root.findByType("span")
      //   span.props.onDoubleClick();
      //   let input = root.findAllByType("input");
      //   expect(input.props.value).toBe("fuck my life");
      // });
  });