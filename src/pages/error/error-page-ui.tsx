import React from "react";

interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {
  error: string;
  className?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { error, className } = props;

  return <div className={className}>
    {error ? <h1>{error}</h1> : <h1>Something went wrong</h1>}
  </div>;
};