class Connection {

    constructor(a,b){
        var connection_features = {
            bodyA: a,
            pointB: b,
            stiffness: 0.04,
            length: 20
        } 

    this.connection = Constraint.create(connection_features)
        World.add(world,this.connection)
      
    }

    show(){
        if (this.connection.bodyA != null){
            var a = this.connection.bodyA.position
            var b = this.connection.pointB
                line (a.x,a.y,b.x,b.y)
        }
    }

    bc (){
        this.connection.bodyA = null
    }
}    