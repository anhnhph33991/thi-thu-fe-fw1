const api = "https://666f070ef1e1da2be521c717.mockapi.io/api/cameras"
app.controller('ListController', function ($scope, $http) {
    $scope.cameras = [];

    $scope.fetchAll = () => {
        $http.get(api)
            .then(
                (res) => {
                    $scope.cameras = res.data
                    console.log($scope.cameras);
                },
                (err) => {
                    console.log(err);
                }
            )
    }

    $scope.fetchAll()
})

app.controller('CreateController', function ($scope, $http, $location) {
    $scope.input = {
        tenMay: "",
        viTriLap: "",
        gia: "",
        nguoiLap: "",
        trangThai: "Hoạt Động",
    }

    $scope.errors = {
        tenMay: "",
        viTriLap: "",
        gia: "",
        nguoiLap: "",
        trangThai: "",
    }

    $scope.flagCheck = false


    $scope.handleAdd = () => {

        $scope.validate()

        if ($scope.flagCheck) {
            $scope.insert($scope.input)
                .then(
                    (res) => {
                        alert('Create success')
                        $location.url('/list-camera')
                    },
                    (err) => {
                        console.log(err);
                    }
                )

        }

    }

    $scope.validate = () => {
        let check = true;

        if ($scope.input.tenMay == "") {
            $scope.errors.tenMay = "Vui lòng nhập ten may"
            check = false
        } else {
            $scope.errors.tenMay = ""
        }

        if ($scope.input.viTriLap == "") {
            $scope.errors.viTriLap = "Vui lòng nhập viTriLap"
            check = false
        } else {
            $scope.errors.viTriLap = ""
        }

        if ($scope.input.gia == "") {
            $scope.errors.gia = "Vui lòng nhập gia"
            check = false
        } else if ($scope.input.gia < 0 || $scope.input.gia < 100) {
            $scope.errors.gia = "Phải là số nguyên dương lớn hơn 100"
            check = false
        } else {
            $scope.errors.gia = ""
        }

        if ($scope.input.nguoiLap == "") {
            $scope.errors.nguoiLap = "Vui lòng nhập nguoiLap"
            check = false
        } else {
            $scope.errors.nguoiLap = ""
        }

        if ($scope.input.trangThai == "") {
            $scope.errors.trangThai = "Vui lòng nhập trangThai"
            check = false
        } else {
            $scope.errors.trangThai = ""
        }

        $scope.flagCheck = check
    }

    $scope.insert = (data) => {
        return $http.post(api, data)
            .then(
                (res) => {
                    return res.data
                },
                (err) => {
                    console.log(err);
                }
            )
    }
})

app.controller('DetailController', function ($scope, $http, $routeParams) {
    $scope.camera = []

    $scope.input = {
        tenMay: "",
        viTriLap: "",
        gia: "",
        nguoiLap: "",
        trangThai: "",
    }


    const id = $routeParams.id

    $scope.fetchOne = () => {
        $http.get(`${api}/${id}`)
            .then(
                (res) => {
                    $scope.camera = res.data;
                    $scope.input.tenMay = $scope.camera.tenMay
                    $scope.input.viTriLap = $scope.camera.viTriLap
                    $scope.input.gia = $scope.camera.gia
                    $scope.input.nguoiLap = $scope.camera.nguoiLap
                    $scope.input.trangThai = $scope.camera.trangThai
                },
                (err) => {
                    console.log(err);
                }
            )
    }

    $scope.fetchOne()
})

app.controller('EditController', function ($scope, $http, $location, $routeParams) {
    const id = $routeParams.id
    $scope.input = {
        tenMay: "",
        viTriLap: "",
        gia: "",
        nguoiLap: "",
        trangThai: "",
    }

    $scope.errors = {
        tenMay: "",
        viTriLap: "",
        gia: "",
        nguoiLap: "",
        trangThai: "",
    }

    $scope.flagCheck = false

    $scope.fetchOne = () => {
        $http.get(`${api}/${id}`)
            .then(
                (res) => {
                    $scope.camera = res.data;
                    $scope.input.tenMay = $scope.camera.tenMay
                    $scope.input.viTriLap = $scope.camera.viTriLap
                    $scope.input.gia = $scope.camera.gia
                    $scope.input.nguoiLap = $scope.camera.nguoiLap
                    $scope.input.trangThai = $scope.camera.trangThai
                },
                (err) => {
                    console.log(err);
                }
            )
    }


    $scope.handleEdit = () => {

        $scope.validate()

        if ($scope.flagCheck) {

            console.log($scope.input);

            $scope.update($scope.input)
                .then(
                    (res) => {
                        alert('update success')
                        $location.url('/list-camera')
                    },
                    (err) => {
                        console.log(err);
                    }
                )

        }

    }

    $scope.validate = () => {
        let check = true;

        if ($scope.input.tenMay == "") {
            $scope.errors.tenMay = "Vui lòng nhập ten may"
            check = false
        } else {
            $scope.errors.tenMay = ""
        }

        if ($scope.input.viTriLap == "") {
            $scope.errors.viTriLap = "Vui lòng nhập viTriLap"
            check = false
        } else {
            $scope.errors.viTriLap = ""
        }

        if ($scope.input.gia == "") {
            $scope.errors.gia = "Vui lòng nhập gia"
            check = false
        } else if ($scope.input.gia < 0 || $scope.input.gia < 100) {
            $scope.errors.gia = "Phải là số nguyên dương lớn hơn 100"
            check = false
        } else {
            $scope.errors.gia = ""
        }

        if ($scope.input.nguoiLap == "") {
            $scope.errors.nguoiLap = "Vui lòng nhập nguoiLap"
            check = false
        } else {
            $scope.errors.nguoiLap = ""
        }

        if ($scope.input.trangThai == "") {
            $scope.errors.trangThai = "Vui lòng nhập trangThai"
            check = false
        } else {
            $scope.errors.trangThai = ""
        }

        $scope.flagCheck = check
    }

    $scope.update = (data) => {
        return $http.put(`${api}/${id}`, data)
            .then(
                (res) => {
                    return res.data
                },
                (err) => {
                    console.log(err);
                }
            )
    }

    $scope.fetchOne()
})


