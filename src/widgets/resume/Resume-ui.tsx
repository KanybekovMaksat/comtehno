import { UserCard } from "~entities/resumeCard/usersCard-ui";
import { SkillsList } from "~features/skillsList/skillsList-ui";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation();

  const user = {
    name: t("resume.name"),
    role: t("resume.role"),
    avatar: "img",
    tools: ["JavaScript", "HTML", "CSS", "React", "Vue.js", "Node.js", "Miro"],
    skills: [
      t("skillsList.skill1"),
      t("skillsList.skill2"),
      t("skillsList.skill3"),
      t("skillsList.skill4"),
      t("skillsList.skill5"),
      t("skillsList.skill6"),
      t("skillsList.skill7"),
      t("skillsList.skill8"),
      t("skillsList.skill9"),
    ],
  };

  return (
    <Stack spacing={4} maxWidth={1440} mx="auto" my={8}>
      <Typography variant="h4" textAlign="center" className="r-sm:text-start">
        {t("resume.title")}
      </Typography>
      <div className="flex justify-around r-md:flex-col r-md:gap-5">
        <UserCard {...user} />
        <SkillsList skills={user.skills} />
      </div>
    </Stack>
  );
};
