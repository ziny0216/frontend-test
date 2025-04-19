import '@/styles/components/button.scss';
import { ButtonPropsType } from '@/types/common';
import Spinner from '@/components/common/Spinner';

export default function Button({
  text,
  className,
  isLoading = false,
  ...props
}: ButtonPropsType) {
  return (
    <button {...props} type="button" className={className}>
      {isLoading ? <Spinner /> : null}
      {text}
    </button>
  );
}
