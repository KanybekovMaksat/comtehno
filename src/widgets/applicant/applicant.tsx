import { Typography } from "@mui/material";
import { applicantTypes, applocantQuery } from "~entities/applicant";

export const Applicant: React.FC = () => {
  const {
    data: applicantData,
    isLoading,
    isError,
  } = applocantQuery.useGetApplicant();

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error 404</span>;

  return (
    <div className="mb-20 mx-6">
      {applicantData?.map((data: applicantTypes.ApplicationTypes) => (
        <div key={data.id}>
          <Typography
            className="r-sm:text-[32px] text-[44px] font-light mb-5"
            variant="h2"
          >
            {data?.name}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: data?.text }}></div>
        </div>
      ))}
    </div>
  );
};
