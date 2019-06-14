import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERPREFERENCE2', {schema: 'dbo' } )
export class T_PRINTERPREFERENCE2 {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRF_CONSOLEID_C',
        })
    public PRF_CONSOLEID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'PRF_PRINTERID_C',
        })
    public PRF_PRINTERID_C: string;

}
