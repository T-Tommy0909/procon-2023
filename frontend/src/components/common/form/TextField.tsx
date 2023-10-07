import { useRef } from "react";
import styled from "styled-components";

interface Props {
  id?: string;
  value: string;
  type: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const TextField: React.FC<Props> = ({
  id,
  value,
  type,
  onChange,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Input
        value={value}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        ref={inputRef}
      />
      {placeholder != null && !value && (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 48rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: #f2f1f1;
  color: #3f3f3f;
`;

const Placeholder = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  pointer-events: none;
  color: #3f3f3f;
`;
