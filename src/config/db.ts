import { Sequelize } from "sequelize";

const db = new Sequelize('postgresql://rest_api_node_typescript_u5ui_user:FBdf8CMHJD2epXYv4AwRBNPMWvcX10Yj@dpg-ct5pd73qf0us73889bfg-a.oregon-postgres.render.com/rest_api_node_typescript_u5ui?ssl=true')

export default db