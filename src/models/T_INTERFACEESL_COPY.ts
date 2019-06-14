import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACEESL_COPY', {schema: 'dbo' } )
export class T_INTERFACEESL_COPY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ESL_SESSIONNBR_N',
        })
    public ESL_SESSIONNBR_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 13,
        scale: 0,
        name: 'ESL_EANCODE_N',
        })
    public ESL_EANCODE_N: number;

}
