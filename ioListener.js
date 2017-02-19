class ioListener{
    //@params io = socket.io
    static use(io){
        io.on('connection',function(socket){
            console.log(socket.id);
        })
    }
}
module.exports = ioListener;