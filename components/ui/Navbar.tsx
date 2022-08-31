import {
  Image,
  Link as LinkNext,
  Spacer,
  Text,
  useTheme,
} from "@nextui-org/react";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Link href="/" passHref>
        <LinkNext>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
            alt="icono de la app"
            width={45}
            height={45}
            css={{ padding: "0px 3px" }}
          />
          <Text css={{ fontFamily: "FontPokemon" }} h2>
            Pokémon
          </Text>
        </LinkNext>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favorites" passHref>
        <LinkNext>
          <Text css={{ fontFamily: "FontPokemon" }} color="white">
            Favoritos
          </Text>
        </LinkNext>
      </Link>
    </div>
  );
};
