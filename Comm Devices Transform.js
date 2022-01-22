(function transformRow(source, target, map, log, isUpdate) {

	if (source.u_type == 'Mobile phone') {
        target.type = 'cellphone';
    }

    if (source.u_state == 'Assigned') {
        target.install_status = 1;
    }

})(source, target, map, log, action==="update");