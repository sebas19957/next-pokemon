import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorite = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay pokémones favoritos</Text>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
        alt="icono de la app"
        width={130}
        height={130}
        css={{ opacity: 0.2 }}
      />
    </Container>
  );
};
