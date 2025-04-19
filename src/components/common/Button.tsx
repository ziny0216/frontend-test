import '@/styles/components/button.scss';
import { ButtonPropsType } from '@/types/common';
import Spinner from '@/components/common/Spinner';

export default function Button({
  text,
  className,
  isLoading = false,
  role = 'button',
  ...props
}: ButtonPropsType) {
  return (
    <button
      disabled={isLoading || props.disabled}
      {...props}
      type="button"
      className={`${isLoading && 'loading'} ${className}`}
    >
      {isLoading ? <Spinner size={10} /> : null}
      {text}
    </button>
  );
}
