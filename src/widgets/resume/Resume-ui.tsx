import { UserCard } from "~entities/resumeCard/usersCard-ui";
import { SkillsList } from "~features/skillsList/skillsList-ui";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Resume = ({ fullName, photo, position, tools, skills }) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={4} maxWidth={1440} my={8}>
      <Typography variant="h2" className="text-[44px] mb-4">
        {t("resume.title")}
      </Typography>
      <div className="flex justify-between gap-4 mt-0 r-md:flex-col r-md:gap-5">
        <UserCard {...{ fullName, photo, position, tools }} />
        <SkillsList skills={skills} />
      </div>
    </Stack>
  );
};
