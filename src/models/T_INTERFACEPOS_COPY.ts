import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACEPOS_COPY', {schema: 'dbo' } )
@Index('IX_INTERFACEPOS_COPY_PKINDEX', ['POC_SESSIONNBR_N', 'POC_EANCODE_N'], {unique: true})
export class T_INTERFACEPOS_COPY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'POC_SESSIONNBR_N',
        })
    public POC_SESSIONNBR_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 13,
        scale: 0,
        name: 'POC_EANCODE_N',
        })
    public POC_EANCODE_N: number;

}
