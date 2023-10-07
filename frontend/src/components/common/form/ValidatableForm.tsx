import { FC, useCallback, useRef, useMemo } from "react";

import { ValidationContext } from "../../../contexts/ValidationContext";

interface Props {
  onSubmit: () => void;
  onValidated: (isValid: boolean) => void;
  children?: React.ReactNode;
}

export const ValidatableForm: FC<Props> = ({
  onSubmit,
  onValidated,
  children,
}) => {
  const inputs = useRef(new Map<string, boolean>());

  const notifyValidation = useCallback(() => {
    onValidated(!Array.from(inputs.current.values()).includes(false));
  }, [onValidated]);

  const register = useCallback(
    (id: string, isValid: boolean) => {
      if (inputs.current.get(id) === isValid) {
        return;
      }
      inputs.current.set(id, isValid);
      notifyValidation();
    },
    [notifyValidation]
  );

  const unregister = useCallback(
    (id: string) => {
      if (!inputs.current.has(id)) {
        return;
      }
      inputs.current.delete(id);
      notifyValidation();
    },
    [notifyValidation]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <ValidationContext.Provider
        value={useMemo(
          () => ({
            register,
            unregister,
          }),
          [register, unregister]
        )}
      >
        {children}
      </ValidationContext.Provider>
    </form>
  );
};
