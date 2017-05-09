
import React, { Component } from 'react';
import {
} from 'react-native';

export default class NetUtil extends Component {

   static postJson(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
            },
            body: data
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                //  callback(JSON.parse(responseText));
                callback(responseText);
            }).done();
    }

    static get(url, callback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }

}
