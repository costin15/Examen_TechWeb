import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DataBase_Examen.db',
    define:{
        timestamps:false
    }
});


const CrewMember = sequelize.define('CrewMember',{
    id: {
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
    Name : {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            min: 5
        }
    },
    Rol:{
        type:Sequelize.ENUM,
        values:['CAPTAIN', 'BOATSWAIN'],
        allowNull: false,
    }
    
});

const Ship = sequelize.define('Ship',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Nume : {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            min:3
        }
    },
    Displacement:{
        type: Sequelize.UUID,
        allowNull: false,
        validate:{
            min:50
        }
    }
});






Ship.hasMany(CrewMember,{foreignKey: 'shipID'});
CrewMember.belongsTo(Ship, {foreignKey: 'shipID'});



async function initialize() {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
}

export {
    initialize,
    CrewMember, 
    Ship,
}

