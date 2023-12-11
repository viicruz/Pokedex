//Libraries Imports
import { View, Text, Image, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';


//Components Imports
import RenderTypeBadges from '../RenderTypeBadges';

//Styles Imports
import { styles } from './styles';
import { typeBgColors, statColors } from '../../../assets/pokeColors/styles';

//Hook Imports
import usePokemon from '../../../Hooks/Queries/usePokemon';

type Props = {
    name: string;
    imageUrl: string;
};

export default function PokeDetailScreen({ name }: Props) {

    const { data: pokemon, isLoading } = usePokemon(name);
    const baseStats = pokemon.stats;

    const rotation = useRef(new Animated.Value(0)).current;
    const animatedStatScales = useRef(baseStats.map(() => new Animated.Value(0))).current;
    const animatedTextOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 30000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),

        );

        const statAnimations = baseStats.map((stat, index) =>
            Animated.timing(animatedStatScales[index], {
                toValue: 1,
                duration: 240,
                easing: Easing.linear,
                useNativeDriver: true,
                delay: 200
            })
        );



        const parallelAnimation = Animated.parallel(statAnimations);
        parallelAnimation.start();
        animation.start();

        return () => {
            animation.stop();
            parallelAnimation.stop();

        };
    }, [rotation, baseStats, animatedStatScales]);

    const rotateInterpolation = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const animatedStyles = {
        transform: [{ rotate: rotateInterpolation }],
    };



    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const backgroundColor = typeBgColors[pokemon.types[0].type.name.toLowerCase()] || 'gray';
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    const pokeWeight = pokemon.weight.toString();
    const formattedPokeWeight = (pokeWeight.slice(0, -1) + "," + pokeWeight.slice(-1)) || "0.0";

    const pokeHeight = pokemon.height.toString();
    const formattedPokeHeight = (pokeHeight.slice(0, -1) + "," + pokeHeight.slice(-1)) || "0.0";


    const statsAbreviation = {
        hp: 'HP',
        attack: 'ATK',
        defense: 'DEF',
        "special-attack": 'SPA',
        'special-defense': 'SPDEF',
        speed: 'SPD'
    }

    const renderedBaseStats = baseStats.map((stat, index) => (
        <View key={index} style={styles.statRow}>
            <View style={{ width: '15%' }}>
                <Text style={styles.statName}>{statsAbreviation[stat.stat.name.toLowerCase()]}:</Text>
            </View>
            <View style={styles.statValueContainer}>
                <View style={[{ width: 255, backgroundColor: '#e5ebec', borderRadius: 6 }]}>

                    <Animated.View

                        style={[styles.statValue,
                        {
                            transform: [
                                { scaleX: animatedStatScales[index] }],
                            width: stat.base_stat,
                            height: 20,
                            backgroundColor: statColors[stat.stat.name.toLowerCase()]
                        }
                        ]}
                    >

                        <Text style={styles.statValueText}>{stat.base_stat}/255</Text>
                    </Animated.View>
                </View>
            </View>
        </View>
    ));

    const abilities = pokemon.abilities;

    const renderedAbilities = abilities.map((ability, index) => (
        <Text key={index}>{ability.ability.name}</Text>
    ));

    return (

        <View style={styles.wrapper}>
            <View style={[styles.pkmInfoContainer, { backgroundColor }]}>
                <Animated.Image source={require('../../../assets/pokeballBackground.png')} style={[animatedStyles, { width: 250, height: 250, position: 'absolute', opacity: 0.4, justifyContent: 'center' }]} />
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.imageContainer} />
                </View>

            </View>
            <View style={styles.pkmInfoWrapper}>
                <View style={styles.pkmInfoContainer}>
                    <View>
                        <Text style={styles.titleContainer} >{name}</Text>
                    </View>
                    <View style={styles.typeContainer}>
                        <RenderTypeBadges name={name} />
                    </View>
                    <View style={styles.sizeInformationsContainer}>
                        <View>

                            <Text style={styles.sizeContainer}>{formattedPokeWeight} KG</Text>
                            <Text style={{ color: 'gray', textAlign: 'left' }}>Weight</Text>
                        </View>
                        <View>
                            <Text style={styles.sizeContainer}>{formattedPokeHeight} M</Text>
                            <Text style={{ color: 'gray', textAlign: 'left' }}>Height</Text>
                        </View>
                    </View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statsTitle}>Base Stats</Text>
                        {renderedBaseStats}
                    </View>
                </View>
            </View>

        </View>
    );
}

