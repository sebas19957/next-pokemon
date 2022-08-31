import { FC } from "react";

import { Card, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { SmallPokemon } from "../../interfaces/pokemon-list";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} key={pokemon.id} onClick={onClick}>
      <Card isHoverable isPressable>
        <Card.Header>
          <Text transform="capitalize">{pokemon.name}</Text>
        </Card.Header>
        <Card.Body>
          <Image
            src={pokemon.img}
            alt="icono de la app"
            width={120}
            height={120}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};
