import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span>
      {status === 'minus' ? (
        <span className="items-left ml-2 flex cursor-pointer justify-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-lg font-medium text-white">
          لهم
          {/* <ChevronUpDownIcon /> */}
        </span>
      ) : null}
      {status === 'plus' ? (
        <span className="items-left ml-2 flex cursor-pointer justify-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-lg font-medium text-white">
          {/* <CheckIcon className="ml-1 w-4 text-white" /> */}
          لنا
        </span>
      ) : null}
    </span>
  );
}
