import { UserCard } from "~entities/resumeCard/usersCard-ui";
import { SkillsList } from "~features/skillsList/skillsList-ui";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation();

  const user = {
    name: t("resume.name"),
    role: t("resume.role"),
    avatar:
      "https://s3-alpha-sig.figma.com/img/adb1/5f73/d293422a885d1a0b2818e825ad470162?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Il-vxZ~1krMWo2V5wxkE4b~6pRXpT0Rr6rb6E1F61OJGElWBsx4wK1VCdTwhhoTFKZGJWuEsCybeO0r2fVaQRWXRHZ2n3XBRkO86k05~GUFos4yE47OWUfzRk2x8oSA3QKvbnAW-Sofdirj1oFLUamMphIBZI6o8c-I-NePfXuzaaMNqoQlf2Blz1fgAE0Pkbbog~F6CVX-k4thBO1k3ctWve5HhfNBRG9TlGe76GARPlk6YsRTp3lErLhk-fWzcR9crvmscGVmnDDPgT9wuvgODMXUMJobH5g4Whz7bV3KY98s7mXuWYY3Nf3C8OJ~M5peitplwIqENzxhEfnxnkA__",
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
