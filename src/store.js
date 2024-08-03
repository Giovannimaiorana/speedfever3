import { reactive } from "vue"

export const store = reactive({
    loading: true,
    sliderElements: {
        'Traction Circle': {
            'description': `Il diagramma dell'accelerazione gravitazionale ti aiuta a capire i limiti: dell'auto, del setup e te stesso.`,
            'img': 'standings.png'
        },
        'Live timing': {
            'description': 'Questo widget visualizza i dati telemetrici live: Brake, Clutch, throttle, Rpms, Gears, Steering.',
            'img': 'laptime-graph.png'
        },
        'Sector Time': {
            'description': 'Visualizza il tuo tempo sul giro diviso in tre settori.',
            'img': 'standings.png'
        },
        'Delta Time': {
            'description': 'Vedere dove guardagni o perdi tempo è necessario, Il delta time serve proprio a questo.',
            'img': 'laptime-spread.png'
        },
        'Brake Wear': {
            'description': 'Gestisci al meglio i freni nei tuoi stint monitorando l\'usura e il tempo di utilizzo.',
            'img': 'standings.png'
        },
        'Tyre Monitor': {
            'description': 'La vita degli pneumatici è importante, questo widget aiuta a gestirli.',
            'img': 'laptime-spread.png'
        },
        'Locking Sensor': {
            'description': 'Intuisci le perdite di aderenza causate da bloccaggi e micro bloccaggi.',
            'img': 'standings.png'
        },
        'Fuel Calculator': {
            'description': 'Calcola il carburante necessario per finire la gara, o il tuo stint.',
            'img': 'laptime-spread.png'
        }
    },
})
