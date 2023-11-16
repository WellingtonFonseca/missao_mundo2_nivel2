const swap = (vector, a_pos, b_pos) => {
    if (a_pos >= vector.length) {
        console.log('a_pos is invalid');
        return vector;
    }
    else if (b_pos >= vector.length) {
        console.log('b_pos is invalid');
        return vector;
    };

    const a_val = vector[a_pos];
    const b_val = vector[b_pos];
    vector[a_pos] = b_val;
    vector[b_pos] = a_val;
    return vector;
};

const shuffle = (vector, quantity_shuffle) => {
    console.log('shuffle');
    let vector_new = [];

    while(quantity_shuffle > 0) {
        let index_random = Math.floor(Math.random() * vector.length);

        vector_new.push(vector[index_random]);
        vector.splice(index_random, 1);

        quantity_shuffle --;

        if (vector.length == 0 && quantity_shuffle > 0) {
            vector = vector_new;
            vector_new = [];
        };
    };

    if (vector.length > 0) {
        vector_new = vector_new.concat(vector);
    };

    return vector_new;

};

const bubble_sort = (vector) => {
    console.log('bubble_sort');
    for (var i = 0; i < vector.length; i++) {

        for (var j = 0; j < (vector.length - i - 1); j++) {
            if (vector[j] > vector[j + 1]) {
                vector = swap(vector, j, j + 1);
            }
        }
    }

    return vector;
};

const selection_sort = (vector) => {
    console.log('selection_sort');
    let n = vector.length;

    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(vector[j] < vector[min]) {
                min=j;
            }
         }
         if (min != i) {
             vector = swap(vector, i, min);
        }
    }
    return vector;
};

const partition = (vector, left_pos, right_pos) => {
    let pivot = vector[Math.floor((right_pos + left_pos) / 2)];
    let l = left_pos;
    let r = right_pos;

    while (l <= r) {
        while (vector[l] < pivot) {
            l++;
        }
        while (vector[r] > pivot) {
            r--;
        }
        if (l <= r) {
            swap(vector, l, r);
            l++;
            r--;
        }
    }
    return l;
}

const quick_sort = (vector, left_pos, right_pos) => {
    console.log('quick_sort');
    let index;
    if (vector.length > 1) {
        index = partition(vector, left_pos, right_pos);
        if (left_pos < index - 1) {
            quick_sort(vector, left_pos, index - 1);
        }
        if (index < right_pos) {
            quick_sort(vector, index, right_pos);
        }
    }
    return vector;
}