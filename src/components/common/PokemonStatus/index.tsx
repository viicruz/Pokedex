//Libraries Imports
import { useEffect, useRef } from 'react'
import { View, Text, Animated, Easing } from 'react-native';

//Components Imports

//Styles Imports
import { styles } from './styles'
import { statColors } from '../../../assets/pokeColors/styles';

//Hook Imports
import usePokemon from '../../../Hooks/Queries/usePokemon';



type Props = {
    name: string;
}

export default function PokemonStatus(props: Props) {

    const pokemon = usePokemon(props.name);
    const baseStats = pokemon.data.stats;
    const animatedStatScales = useRef(baseStats.map(() => new Animated.Value(0))).current;

    useEffect(() => {
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
        return () => {
            parallelAnimation.stop();

        };
    }, [baseStats, animatedStatScales]);

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
                <View style={[{ width: 255 + 40, backgroundColor: '#e5ebec', borderRadius: 6 }]}>

                    <Animated.View

                        style={[styles.statValue,
                        {
                            transform: [
                                { scaleX: animatedStatScales[index] }],
                            width: stat.base_stat + 40,
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


    return (
        <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Base Stats</Text>
            {renderedBaseStats}
        </View>
    )
}