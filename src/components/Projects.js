import React, { useState } from "react";
import { Tabs, Tab, Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "none",
    color: theme.palette.text.primary,
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    },
}));

const StyledImage = styled("img")({
    width: "100%",
    height: "200px",
    objectFit: "contain",
    backgroundColor: "#f0f0f0",
    borderRadius: "15px 15px 0 0",
    transition: "transform 0.5s ease",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const projectData = [
        {
            title: "AISLAMIENTO DE NEOPRENO",
            description: "Producto Disponible",
            image: require('./pictures/pic01.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "CORTINA DE MEDIA TEMPERATURA",
            description: "Producto Disponible",
            image: require('./pictures/pic02.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title:"CORTINA ANTI INSECTOS",
            description: "Producto Disponible",
            image: require('./pictures/pic03.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "ELEMENTO LIQUIDO",
            description: "Producto Disponible",
            image: require('./pictures/pic04.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "ELEMENTO LIQUIDO",
            description: "Producto Disponible",
            image: require('./pictures/pic05.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "FILTRO SECADOR",
            description: "Producto Disponible",
            image: require('./pictures/pic06.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "PANELES DE POLIURETANO",
            description: "Producto Disponible",
            image: require('./pictures/pic07.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "PRESOSTATO MARCA DANFOS",
            description: "Producto Disponible",
            image: require('./pictures/pic08.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "RIEL PARA CORTINA PVC",
            description: "Producto Disponible",
            image: require('./pictures/pic09.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "UNIDAD DE REFRIGERACION 2",
            description: "Producto Disponible",
            image: require('./pictures/pic10.jpg'),
            category: "Sistemas de Refrigeración"
        },
        {
            title: "VALVULA BOLA",
            description: "Producto Disponible",
            image: require('./pictures/pic11.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "VENTILADORES WEIGUANG",
            description: "Producto Disponible",
            image: require('./pictures/pic12.jpg'),
            category: "Componentes de Refrigeración"
        },
        {
            title: "VISORT DE LIQUIDO",
            description: "Producto Disponible",
            image: require('./pictures/pic13.jpg'),
            category: "Componentes de Refrigeración"
        },
    ];

    const categories = ["Sistemas de Refrigeración", "Componentes de Refrigeración"];

    const renderProjectCards = () => {
        const filteredProjects = projectData.filter(
            project => project.category === categories[activeTab]
        );
    
        return filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                    <StyledImage src={project.image} alt={project.title} />
                    <CardContent>
                        <Typography variant="h6" component="div" gutterBottom>
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ textAlign: "justify" }}>
                            {project.description}
                        </Typography>
                    </CardContent>
                </StyledCard>
            </Grid>
        ));
    };

    return (
        <div className="category-tabs" style={{ padding: "20px" }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
                {categories.map((category, index) => (
                    <StyledTab key={index} label={category} />
                ))}
            </Tabs>
            <Grid container spacing={4} style={{ marginTop: "20px" }}>
                {renderProjectCards()}
            </Grid>
        </div>
    );
};

export default Projects;
